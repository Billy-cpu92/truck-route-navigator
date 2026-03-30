'use strict';

/**
 * Save routes to localStorage.
 * @param {Array} routes - The array of route objects to save.
 */
function saveRoutes(routes) {
    localStorage.setItem('routes', JSON.stringify(routes));
}

/**
 * Load routes from localStorage.
 * @returns {Array} - The array of route objects loaded.
 */
function loadRoutes() {
    const routes = localStorage.getItem('routes');
    return routes ? JSON.parse(routes) : [];
}

/**
 * Edit a route in localStorage.
 * @param {number} index - The index of the route to edit.
 * @param {Object} newRoute - The new route object.
 */
function editRoute(index, newRoute) {
    let routes = loadRoutes();
    if (index >= 0 && index < routes.length) {
        routes[index] = newRoute;
        saveRoutes(routes);
    }
}

/**
 * Delete a route from localStorage.
 * @param {number} index - The index of the route to delete.
 */
function deleteRoute(index) {
    let routes = loadRoutes();
    if (index >= 0 && index < routes.length) {
        routes.splice(index, 1);
        saveRoutes(routes);
    }
}

// Export functions for external use
module.exports = { saveRoutes, loadRoutes, editRoute, deleteRoute };