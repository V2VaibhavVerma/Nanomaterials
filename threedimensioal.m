% MATLAB Code to Plot Correctly Oriented Parabolic DOS

% Define energy range: E from 0 to 10 (arbitrary units)
E = linspace(0, 10, 500);

% Define band gap energy Eg
Eg = 4;

% Initialize g(E) with zeros
g = zeros(size(E));

% Parabolic increase in DOS: g(E) rises smoothly for E >= Eg
g(E >= Eg) = sqrt(E(E >= Eg) - Eg);  % Square root relationship

% Plot the figure
figure;
plot(E, g, 'b', 'LineWidth', 2);  % Blue line with thicker width
hold on;

% Mark Eg with a vertical line
xline(Eg, 'k', 'LineWidth', 1.5);  % Vertical line in black

% Labels for axes
xlabel('Energy (E)', 'FontSize', 12);
ylabel('Density of States g(E)', 'FontSize', 12);

% Set axis limits for clarity
xlim([0 10]);
ylim([0 3]);

% Display grid for better visualization
grid on;

% Title (optional)
title('Parabolic-like Density of States vs Energy', 'FontSize', 14);

hold off;
