% MATLAB Code to Plot the given figure

% Energy axis: range from 0 to 10 (arbitrary units)
E = linspace(0, 10, 500);

% Define band gap energy Eg
Eg = 4;

% Density of States: Zero below Eg, and an exponential decay above Eg
g = zeros(size(E));
g(E >= Eg) = exp(-(E(E >= Eg) - Eg)); % Exponential decay for E >= Eg

% Plot the figure
figure;
plot(E, g, 'b', 'LineWidth', 2); % Plot in blue with thicker lines
hold on;

% Mark Eg with a vertical line
xline(Eg, 'k', 'LineWidth', 1.5); % Vertical line in black

% Labels for axes
xlabel('Energy (E)', 'FontSize', 12);
ylabel('Density of States g(E)', 'FontSize', 12);

% Set axis limits for clarity
xlim([0 10]);
ylim([0 1.1]);

% Display grid for better visualization
grid on;

% Title (optional)
title('Density of States vs Energy', 'FontSize', 14);

hold off;
