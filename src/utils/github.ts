import { Octokit } from "@octokit/rest";

// GitHub repository details
const REPO_OWNER = 'YoussGm3o8';
const REPO_NAME = 'YoussGm3o8.github.io';
const CONTENT_PATH = 'content/posts';

let octokit: Octokit | null = null;

export function initializeGithub(token: string) {
  octokit = new Octokit({ auth: token });
}

export async function getFileContent(path: string): Promise<{ content: string; sha: string } | null> {
  if (!octokit) {
    throw new Error('GitHub API not initialized. Call initializeGithub first.');
  }

  try {
    const response = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
    });

    if ('content' in response.data && 'sha' in response.data) {
      const fileData = response.data as { content: string; sha: string };
      return {
        content: Buffer.from(fileData.content, 'base64').toString('utf-8'),
        sha: fileData.sha,
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching file from GitHub:', error);
    return null;
  }
}

export async function createOrUpdateFile(
  path: string,
  content: string,
  message = 'Update content',
  sha?: string
): Promise<boolean> {
  if (!octokit) {
    throw new Error('GitHub API not initialized. Call initializeGithub first.');
  }

  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
      message,
      content: Buffer.from(content).toString('base64'),
      sha: sha,
    });

    return true;
  } catch (error) {
    console.error('Error creating/updating file on GitHub:', error);
    return false;
  }
}

export async function listFiles(): Promise<Array<{ name: string; path: string; sha: string; type: string }>> {
  if (!octokit) {
    throw new Error('GitHub API not initialized. Call initializeGithub first.');
  }

  try {
    const response = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: CONTENT_PATH,
    });

    if (Array.isArray(response.data)) {
      return response.data.map((item) => ({
        name: item.name,
        path: item.path,
        sha: item.sha,
        type: item.type,
      }));
    }

    return [];
  } catch (error) {
    console.error('Error listing files from GitHub:', error);
    return [];
  }
}

export async function deleteFile(path: string, sha: string, message = 'Delete content'): Promise<boolean> {
  if (!octokit) {
    throw new Error('GitHub API not initialized. Call initializeGithub first.');
  }

  try {
    await octokit.repos.deleteFile({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
      message,
      sha,
    });

    return true;
  } catch (error) {
    console.error('Error deleting file from GitHub:', error);
    return false;
  }
} 