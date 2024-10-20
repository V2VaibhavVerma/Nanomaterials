% Data
nano_content = [0, 7, 20, 40];
fracture_toughness = [8.7, 9, 6.2, 7];
hardness = [17.8, 18.2, 17.9, 17.7];

% Create a figure
figure;

% Plot Fracture Toughness (Left Y-axis)
yyaxis left;
plot(nano_content, fracture_toughness, 'o-', 'LineWidth', 1.5, 'Color', 'k');
ylabel('Fracture toughness / MPa·m^{1/2}');
ylim([4, 10]);

% Plot Hardness (Right Y-axis)
yyaxis right;
plot(nano_content, hardness, 's-', 'LineWidth', 1.5, 'Color', 'k');
ylabel('Hardness / GPa');
ylim([14, 20]);

% Common X-axis label
xlabel('Nano-Al_2O_3 content / vol%');

% Add Legend
legend('Hardness','Fracture toughness', 'Location', 'southoutside', 'Orientation', 'horizontal');

% Grid and Layout
grid on;
set(gca, 'FontSize', 12);
