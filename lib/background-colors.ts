export const BACKGROUND_COLORS = {
  coffee: 'oklch(0.25 0.03 50)',
  navy: 'oklch(0.28 0.05 250)',
  forest: 'oklch(0.28 0.05 150)',
  plum: 'oklch(0.28 0.05 310)',
} as const;

export type BackgroundColorId = keyof typeof BACKGROUND_COLORS;

export interface BackgroundState {
  colorId: BackgroundColorId;
}

export function pickNextBackgroundColor(currentColorId: BackgroundColorId): BackgroundColorId {
  const candidates = Object.keys(BACKGROUND_COLORS).filter(
    (colorId): colorId is BackgroundColorId => colorId !== currentColorId,
  );

  return candidates[Math.floor(Math.random() * candidates.length)];
}
