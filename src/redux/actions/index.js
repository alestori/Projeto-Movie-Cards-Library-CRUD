export const IMPORT_MOVIES = 'IMPORT_MOVIES';
export const importMovies = (movies, loading) => ({
  type: IMPORT_MOVIES,
  movies,
  loading,
});
