data = {
  footer: {
    defaults: {
      year: () => {
        let date = new Date();
        return date.getFullYear();
      }
    }
  }
};
