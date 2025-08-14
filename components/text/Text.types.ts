export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'default-strong'
  | 'default-regular'
  | 'medium-strong'
  | 'small-strong'
  | 'label-default'
  | 'label-small'
  | 'tab-active'
  | 'tab-inactive'
  | 'tab';

export interface ITextProps extends React.HTMLAttributes<HTMLElement> {
  type: TextType;
  children: React.ReactNode;
  className?: string;
}
