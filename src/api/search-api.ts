export type SearchResult = {
  id: string;
  title: string;
  description: string;
};

export const searchApi = {
  search: async (query: string): Promise<SearchResult[]> => {
    // Simulate API call with timeout
    return new Promise((resolve) => {
      setTimeout(() => {
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
