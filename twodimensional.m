% MATLAB Code to Plot Step-like Density of States

% Define energy range: E from 0 to 10 (arbitrary units)
E = linspace(0, 10, 500);

% Define band gap energy Eg
Eg = 4;

% Initialize g(E) with zeros
g = zeros(size(E));

% Define step-like increases in DOS
g(E >= Eg & E < Eg + 1) = 1;  % First step
g(E >= Eg + 1 & E < Eg + 2) = 2;  % Second step
g(E >= Eg + 2) = 3;  % Third step and beyond

% Plot the figure
figure;
stairs(E, g, 'b', 'LineWidth', 2);  % Use 'stairs' to create a step plot
hold on;

% Mark Eg with a vertical line
xline(Eg, 'k', 'LineWidth', 1.5);  % Vertical line in black

% Labels for axes
xlabel('Energy (E)', 'FontSize', 12);
ylabel('Density of States g(E)', 'FontSize', 12);

% Set axis limits for clarity
xlim([0 10]);
ylim([0 4]);

% Display grid for better visualization
grid on;

% Title (optional)
title('Step-like Density of States vs Energy', 'FontSize', 14);

hold off;
