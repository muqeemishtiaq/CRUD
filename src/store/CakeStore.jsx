import axios from 'axios';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useCakeStore = create(
  devtools(
    immer((set) => ({
      cakes: [],
      loading: false,
      error: null,

      getCakesApi: async () => {
        set((state) => { state.loading = true; state.error = null; });
        try {
          const { data } = await axios.get('http://localhost:5173/cakes');
          set((state) => {
            state.cakes = data;
          });
        } catch (err) {
          set((state) => {
            state.error = 'Failed to fetch cakes.';
          });
        } finally {
          set((state) => { state.loading = false; });
        }
      },

      addCakeAPI: async (payload) => {
        set((state) => { state.error = null; });
        try {
          const { data } = await axios.post('http://localhost:4000/cakes', payload);
          set((state) => {
            state.cakes.push(data);
          });
        } catch (err) {
          set((state) => {
            state.error = 'Failed to add cake.';
          });
        }
      },
    }))
  )
);
