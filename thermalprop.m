% Define the size range
size_nm = linspace(10, 50, 100);

% Adjust the curves so they all converge between 0.990 and 1.00 for size_nm between 40 and 50
gamma_spherical = 0.990 + 0.01 * (1 - exp(-0.15 * (size_nm - 10)));
gamma_nanowire   = 0.987 + 0.01 * (1 - exp(-0.13 * (size_nm - 10)));
gamma_nanofilm   = 0.983 + 0.01 * (1 - exp(-0.12 * (size_nm - 10)));

% Create the plot
figure;
plot(size_nm, gamma_spherical, 'b', 'LineWidth', 1.5); % Spherical - blue
hold on;
plot(size_nm, gamma_nanowire, 'r', 'LineWidth', 1.5); % Nanowire - red
plot(size_nm, gamma_nanofilm, 'k', 'LineWidth', 1.5); % Nanofilm - black

% Set axis limits
ylim([0.975 1.00]);
xlim([10 50]);

% Add labels and title
xlabel('Size (nm)', 'FontSize', 12);
ylabel('\gamma_{Dn} / \gamma_{Db}', 'FontSize', 12);

% Add legend
legend('Spherical', 'Nanowire', 'Nanofilm', 'Location', 'southeast');

% Set the box and grid on
grid on;
box on;
