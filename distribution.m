% This is inspired code from index.html and plotcanvas_compiled.js file. 

% The key logic is used from javascript code:
% f(j, x) {
%   var k = 2000 * R * T[j];  // k = 2 * R * T
%   return 4.0 * PI * Math.pow(M[j] / (PI * k), 1.5) * x * x * Math.exp(-M[j] * x * x / k);
% }


% Constants
R = 8.3145;      % Universal gas constant (J/(mol*K))
M = 0.028;       % Molar mass of gas (kg/mol), e.g., nitrogen
T = 300;         % Temperature in Kelvin

% Speed range (m/s)
v = linspace(0, 2000, 1000);

% Maxwell-Boltzmann Distribution
k = 2 * R * T;
f_v = 4 * pi * (M / (pi * k))^(3/2) .* v.^2 .* exp(-M .* v.^2 / k);

% Plot
figure;
plot(v, f_v, 'LineWidth', 2);
xlabel('Speed (m/s)');
ylabel('Probability Density');
title('Maxwell-Boltzmann Distribution');
grid on;
