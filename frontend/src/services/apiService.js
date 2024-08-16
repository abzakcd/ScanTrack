const apiService = {
    fetchData: async () => {
        const response = await fetch('/api/data');
        return response.json();
    }
};

export default apiService;
