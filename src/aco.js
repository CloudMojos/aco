export default class AntColonyOptimization {
  constructor(
    numAnts,
    numIterations,
    evaporationRate,
    alpha = 1,
    beta = 1,
    Q = 1
  ) {
    this.numAnts = numAnts; // Number of ants
    this.numIterations = numIterations; // Number of iterations
    this.evaporationRate = evaporationRate; // Evaporation rate of pheromones
    this.alpha = alpha; // Alpha parameter controls the importance of pheromones
    this.beta = beta; // Beta parameter controls the importance of distances
    this.Q = Q; // Pheromone deposit factor
    this.routes = []; // Array of routes
    this.distances = []; // Array of distances between cities
    this.pheromones = []; // Array of pheromone levels between cities
    this.bestRoute = null; // Best route found so far
    this.bestDistance = Infinity; // Distance of the best route found so far
  }

  initialize(routes) {
    this.routes = routes;

    // Initialize distances between cities
    this.distances = routes.map((route) => this.calculateDistance(route));

    // Initialize pheromone levels between cities
    this.pheromones = Array.from({ length: routes.length }, () =>
      Array.from({ length: routes.length }, () => 1)
    );
  }

  calculateDistance(route) {
    let distance = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const cityA = route[i];
      const cityB = route[i + 1];
      distance += this.distances[cityA][cityB];
    }
    return distance;
  }

  run() {
    for (let iteration = 0; iteration < this.numIterations; iteration++) {
      const antRoutes = [];

      // Construct solutions for each ant
      for (let ant = 0; ant < this.numAnts; ant++) {
        const route = this.constructRoute();
        antRoutes.push(route);

        const distance = this.calculateDistance(route);

        // Update best route if a shorter route is found
        if (distance < this.bestDistance) {
          this.bestRoute = route;
          this.bestDistance = distance;
        }
      }

      // Update pheromone levels
      this.updatePheromones(antRoutes);

      // Evaporate pheromone levels
      this.evaporatePheromones();
    }

    return this.bestRoute;
  }

  constructRoute() {
    const route = [0]; // Start at city 0 (assumed)

    while (route.length < this.routes.length) {
      const currentCity = route[route.length - 1];
      const probabilities = [];

      // Calculate probabilities for next cities
      for (let nextCity = 0; nextCity < this.routes.length; nextCity++) {
        if (!route.includes(nextCity)) {
          const pheromoneLevel = this.pheromones[currentCity][nextCity];
          const distance = this.distances[currentCity][nextCity];
          const probability =
            Math.pow(pheromoneLevel, this.alpha) *
            Math.pow(1 / distance, this.beta);
          probabilities.push({ city: nextCity, probability });
        }
      }

      // Select next city based on probabilities
      const sum = probabilities.reduce(
        (total, { probability }) => total + probability,
        0
      );
      let selectedCity = null;
      let random = Math.random() * sum;

      for (let i = 0; i < probabilities.length; i++) {
        random -= probabilities[i].probability;
        if (random <= 0) {
          selectedCity = probabilities[i].city;
          break;
        }
      }

      route.push(selectedCity);
    }

    return route;
  }

  updatePheromones(antRoutes) {
    // Initialize delta pheromones for each city pair to 0
    const deltaPheromones = Array.from({ length: this.routes.length }, () =>
      Array.from({ length: this.routes.length }, () => 0)
    );

    // Update delta pheromones for each ant
    for (let ant = 0; ant < this.numAnts; ant++) {
      const route = antRoutes[ant];
      const distance = this.calculateDistance(route);

      for (let i = 0; i < route.length - 1; i++) {
        const cityA = route[i];
        const cityB = route[i + 1];
        deltaPheromones[cityA][cityB] += this.Q / distance;
        deltaPheromones[cityB][cityA] += this.Q / distance;
      }
    }

    // Update pheromone levels with evaporation and deposit
    for (let i = 0; i < this.routes.length; i++) {
      for (let j = 0; j < this.routes.length; j++) {
        this.pheromones[i][j] =
          (1 - this.evaporationRate) * this.pheromones[i][j] +
          deltaPheromones[i][j];
      }
    }
  }

  evaporatePheromones() {
    for (let i = 0; i < this.routes.length; i++) {
      for (let j = 0; j < this.routes.length; j++) {
        this.pheromones[i][j] *= 1 - this.evaporationRate;
      }
    }
  }
}
