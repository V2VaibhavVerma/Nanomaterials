% Define particle radius and coercivity values
%The graph is similar like Maxwell Distribution curve, so I am using that reference to draw the curve.

% Website helped me in writing the code: https://bcs.whfreeman.com/WebPub/Chemistry/chemicalprinciples7e/living_graphs/maxwell_boltzmann/maxwell_boltzmann.html

% Constants
R = 8.3145;      % Universal gas constant (J/(mol*K))
M = 0.028;       % Molar mass of gas (kg/mol), e.g., nitrogen
T = 300;         % Temperature in Kelvin

% Speed range (m/s)
v = linspace(0, 2000, 1000);  % Original speed range

% Maxwell-Boltzmann like Distribution
k = 2 * R * T;

% Initialize f_v with zeros
f_v = zeros(size(v));

% Apply the Maxwell-Boltzmann function with velocity shift
f_v(v > 500) = 4 * pi * (M / (pi * k))^(3/2) .* (v(v > 500) - 500).^2 .* exp(-M .* (v(v > 500) - 500).^2 / k);

% Plot the shifted distribution
figure;
plot(v, f_v, 'LineWidth', 2);
ylabel('Coercivity');
xlabel('Particle Radius');
title('The change in magnetic coercivity of NPs as a function of particle radius.');
grid on;
