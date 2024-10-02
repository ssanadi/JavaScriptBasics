function isValidIP(ip) {
    // Regular expression to validate IPv4 address
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
    // Regular expression to validate IPv6 address
    const ipv6Pattern = /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$|^([a-fA-F0-9]{1,4}:){1,7}:$|^([a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}$|^([a-fA-F0-9]{1,4}:){1,5}(:[a-fA-F0-9]{1,4}){1,2}$|^([a-fA-F0-9]{1,4}:){1,4}(:[a-fA-F0-9]{1,4}){1,3}$|^([a-fA-F0-9]{1,4}:){1,3}(:[a-fA-F0-9]{1,4}){1,4}$|^([a-fA-F0-9]{1,4}:){1,2}(:[a-fA-F0-9]{1,4}){1,5}$|^([a-fA-F0-9]{1,4}:){1,6}:([a-fA-F0-9]{1,4})$|^:((:[a-fA-F0-9]{1,4}){1,7}|:)$|^fe80:(:[a-fA-F0-9]{0,4}){0,4}%[0-9a-zA-Z]{1,}$|^::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([a-fA-F0-9]{1,4}:){1,4}:((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
    // Check if IP matches IPv4 or IPv6
    return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
  }
  
  // Test cases
  console.log(isValidIP('192.168.0.1'));        // true (IPv4)
  console.log(isValidIP('2a09:bac1:36a0:148::de:3a')); // true (IPv6)
  console.log(isValidIP('1234:abcd::1'));       // true (IPv6)
  console.log(isValidIP('999.999.999.999'));    // false (invalid IPv4)
  console.log(isValidIP('invalid-ip'));         // false
  