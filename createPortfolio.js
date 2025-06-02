// RD-120 Enable User to Create New Portfolios

function createPortfolio(name, description) {
  return {
    id: Date.now(),
    name,
    description,
    createdAt: new Date(),
  };
}

// Example usage
const myPortfolio = createPortfolio("Retirement Fund", "Long-term investments");
console.log("New Portfolio Created:", myPortfolio);
