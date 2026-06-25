import type { Message } from '../App';
import { useMemo } from 'react';
import { marked } from 'marked';

interface ChatMessageProps {
  message: Message;
}

marked.setOptions({
  breaks: true,
  gfm: true,
});

function renderMarkdown(text: string): string {
  return marked.parse(text, { async: false }) as string;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const renderedContent = useMemo(
    () => (isUser ? null : renderMarkdown(message.content)),
    [isUser, message.content],
  );

  return (
    <div className={`message ${isUser ? 'message-user' : 'message-assistant'}`}>
      {!isUser && (
        <div className="message-avatar assistant-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      )}
      <div className={`message-bubble ${isUser ? 'bubble-user' : 'bubble-assistant'}`}>
        {message.toolStatus && (
          <div className="tool-status">
            <span className="tool-status-dot" />
            {message.toolStatus}
          </div>
        )}
        {isUser ? (
          <div className="message-text">{message.content}</div>
        ) : message.content ? (
          <div
            className="message-text markdown-body"
            dangerouslySetInnerHTML={{ __html: renderedContent! }}
          />
        ) : !message.toolStatus ? (
          <div className="typing-indicator">
            <span /><span /><span />
          </div>
        ) : null}
      </div>
      {isUser && (
        <div className="message-avatar user-avatar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      )}
    </div>
  );
}
