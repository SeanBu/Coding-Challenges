function findDifference(a, b) {
    return Math.abs(a.reduce((pV, cV) => pV * cV, 1) - b.reduce((pV, cV) => pV * cV, 1));
  }