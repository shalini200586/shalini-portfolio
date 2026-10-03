export type ParticleBuffers = {
  positions: Float32Array;
  colors: Float32Array;
  base: Float32Array;
};

function buildSphereParticles(count: number, zOffset: number): ParticleBuffers {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const radius = 4 + Math.random() * 14;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi) + zOffset;
    const t = Math.random();
    colors[i * 3] = 0.77 + t * 0.15;
    colors[i * 3 + 1] = 0.1 + t * 0.08;
    colors[i * 3 + 2] = 0.2 + t * 0.12;
  }

  return { positions, colors, base: positions.slice() };
}

function buildBoxParticles(count: number): ParticleBuffers {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    const t = Math.random();
    colors[i * 3] = 0.77 + t * 0.1;
    colors[i * 3 + 1] = 0.12 + t * 0.05;
    colors[i * 3 + 2] = 0.22 + t * 0.1;
  }

  return { positions, colors, base: positions.slice() };
}

export const interactiveParticles = buildSphereParticles(2000, -4);
export const backgroundParticles = buildBoxParticles(1200);
