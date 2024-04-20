export function providerType(type) {
    const typeMappings = {
      'c': 'مركز',
      'w': 'ورشة',
      'h': 'افراد'
    };
    return typeMappings[type] || '';
  }