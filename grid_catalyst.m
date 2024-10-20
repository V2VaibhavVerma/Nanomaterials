%This code is under processing.

% MATLAB Code to Recreate the Grid Diagram

% Clear previous data
clear; clf;

% Create the figure
figure;
hold on;
axis equal;
axis off;

% Grid size
grid_size = 10;
rows = 8;
cols = 8;

% Plot black main grid
for i = 0:cols
    plot([i i], [0 rows], 'k'); % Vertical lines
end
for j = 0:rows
    plot([0 cols], [j j], 'k'); % Horizontal lines
end

% Add thicker red lines (every 2nd line)
for i = 0:2:cols
    plot([i i], [0 rows], 'r', 'LineWidth', 2); % Vertical red lines
end
for j = 0:2:rows
    plot([0 cols], [j j], 'r', 'LineWidth', 2); % Horizontal red lines
end

% Plot circles inside selected grids
circle_positions = [1.5 1.5; 3.5 2.5; 5.5 2.5; 1.5 3.5; 3.5 4.5; 5.5 4.5];
for k = 1:size(circle_positions, 1)
    viscircles(circle_positions(k, :), 0.15, 'Color', 'k', 'LineWidth', 1);
end

% Add red lines in selected grids (internal lines)
for k = 1:size(circle_positions, 1)
    x = circle_positions(k, 1);
    y = circle_positions(k, 2);
    plot([x-0.5 x+0.5], [y y], 'r', 'LineWidth', 1); % Horizontal
    plot([x x], [y-0.5 y+0.5], 'r', 'LineWidth', 1); % Vertical
end

% Draw blue dashed rectangles around specific groups
rectangle('Position', [0.5 0.5 2 2], 'EdgeColor', 'b', 'LineStyle', '--', 'LineWidth', 1);
rectangle('Position', [2.5 1.5 2 2], 'EdgeColor', 'b', 'LineStyle', '--', 'LineWidth', 1);
rectangle('Position', [4.5 1.5 2 2], 'EdgeColor', 'b', 'LineStyle', '--', 'LineWidth', 1);
rectangle('Position', [0.5 3.5 2 2], 'EdgeColor', 'b', 'LineStyle', '--', 'LineWidth', 1);
rectangle('Position', [2.5 3.5 2 2], 'EdgeColor', 'b', 'LineStyle', '--', 'LineWidth', 1);
rectangle('Position', [4.5 3.5 2 2], 'EdgeColor', 'b', 'LineStyle', '--', 'LineWidth', 1);

% Add text labels in green
text_positions = [1.2 1.8; 3.2 2.8; 5.2 2.8; 1.2 3.8; 3.2 4.8; 5.2 4.8];
labels = {'1', '2', '2', '2', '2', '3'};
for i = 1:length(labels)
    text(text_positions(i, 1), text_positions(i, 2), labels{i}, 'Color', 'g', 'FontSize', 12, 'FontWeight', 'bold');
end

hold off;


% Explanation:
% Grid Creation: A grid is created using plot for both vertical and horizontal lines.
% Red Lines: Every second grid line is made thicker and colored red.
% Circles: viscircles adds circles at specified positions.
% Red Crosses: Red lines inside grids are drawn to resemble the pattern in the original image.
% Dashed Blue Rectangles: rectangle adds blue dashed boxes around selected regions.
% Text Labels: Green text labels are added at specified positions.