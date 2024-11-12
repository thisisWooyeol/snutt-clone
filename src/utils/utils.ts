import { redirect } from 'react-router-dom';

type encodedRedirectProps = {
  type: 'error' | 'success';
  path: string;
  message: string;
};

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 *
 * @param {encodedRedirectProps} params - The parameters for the redirect.
 * @param {('error' | 'success')} params.type - The type of message, either 'error' or 'success'.
 * @param {string} params.path - The path to redirect to.
 * @param {string} params.message - The message to be encoded and added as a query parameter.
 * @returns {Response} The response object that performs the redirect.
 */
export const encodedRedirect = ({
  type,
  path,
  message,
}: encodedRedirectProps): Response =>
  redirect(`${path}?${type}=${encodeURIComponent(message)}`);
