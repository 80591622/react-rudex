import { createSelector } from 'reselect';
import { RootState } from "@/store";

// 创建 memoized 选择器
export const selectTodos = createSelector(
  (state: RootState) => state.todos,
  (todos) => todos ?? [] // 如果 todos 为 undefined 或 null，返回空数组
);

export const selectLoading = createSelector(
  (state: RootState) => state.loading,
  (loading) => loading ?? false // 如果 loading 为 undefined，返回 false
);

export const selectError = createSelector(
  (state: RootState) => state.error,
  (error) => error ?? null // 如果 error 为 undefined，返回 null
);
