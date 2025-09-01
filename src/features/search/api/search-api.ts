export type SearchResult = {
  id: string;
  title: string;
  description: string;
};

export type ApiError = {
  message: string;
  code?: string;
};

export const searchApi = {
  search: async (query: string): Promise<SearchResult[]> => {
    // Simulate API call with timeout
    return new Promise((resolve, reject) => {
      // Simulate random network errors (10% chance)
      const shouldFail = Math.random() < 0.1;

      setTimeout(() => {
        if (shouldFail) {
          reject({
            message: "Network error occurred while searching",
            code: "NETWORK_ERROR",
          });
          return;
        }

        // Mock results - filter based on query if it exists
        const allResults = [
          {
            id: "1",
            title: "NEURAL NETWORK ARCHITECTURE",
            description:
              "Advanced pattern recognition system with multi-layered perceptrons.",
          },
          {
            id: "2",
            title: "QUANTUM ENCRYPTION PROTOCOL",
            description:
              "Secure communication channel using quantum entanglement principles.",
          },
        ];
        // Filter results based on query (case-insensitive)
        const filteredResults = allResults.filter(
          (result) =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.description.toLowerCase().includes(query.toLowerCase()),
        );
        resolve(filteredResults);
      }, 1500);
    });
  },
};
