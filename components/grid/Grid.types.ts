export type GridSize = 'default' | 'center';

export type GridComponent = 'header' | 'footer' | 'section';

export interface IGridProps {
  size: GridSize;
  children: React.ReactNode;
  className?: string;
  component?: GridComponent;
}
