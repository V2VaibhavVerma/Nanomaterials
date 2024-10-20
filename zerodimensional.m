% MATLAB script to plot g(E) vs E with a spike at Eg

% Define the band gap energy Eg
Eg = 4; % Set Eg to any value you need

% Create energy axis (E) and corresponding g(E)
E = linspace(0, 10, 500); % Energy values ranging from 0 to 10
g = zeros(size(E));       % Initialize g(E) as zeros

% Create a spike at Eg (a sharp peak in g(E))
g(E == Eg) = 1; % Create a peak at E = Eg

% Create the plot
figure;
plot(E, g, 'b', 'LineWidth', 2); % Plot g(E) vs E

% Mark Eg on the x-axis with a vertical line
xline(Eg, 'k', 'LineWidth', 1.5);  % Vertical line at Eg

% Set axis limits for clarity
xlim([0 10]);
ylim([0 1.2]);

% Label the axes
xlabel('Energy (E)', 'FontSize', 12);
ylabel('Density of States g(E)', 'FontSize', 12);

% Mark Eg on the x-axis
text(Eg, -0.1, 'E_g', 'FontSize', 12, 'HorizontalAlignment', 'center');

% Add grid and title
grid on;
title('g(E) vs E with Band Gap Energy', 'FontSize', 14);

% Display the plot
hold off;
