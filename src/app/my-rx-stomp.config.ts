import { StompConfig } from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';

export const stompConfig: StompConfig = {
    // Which server?
    url: socketProvider,
    // Headers
    // Typical keys: login, passcode, host
    headers: {
      login: 'guest',
      passcode: 'guest'
    },
    // How frequent is the heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeat_in: 0, // Typical value 0 - disabled
    heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 5000 (5 seconds)
    reconnect_delay: 5000,
    // Will log diagnostics on console
    debug: true
  } ;

  export function socketProvider() {
    return new SockJS('http://192.168.0.102:8080/socket/');
  };