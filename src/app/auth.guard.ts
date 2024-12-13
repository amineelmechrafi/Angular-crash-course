import { inject } from '@angular/core';
import { CanActivateFn,  Router,  RouterStateSnapshot } from '@angular/router';


export const authGuard: CanActivateFn = async (route, state: RouterStateSnapshot) => {
  const session = false; // Simulating the session status (false means not authenticated)

  const router: Router = inject(Router);

  // If session is false, navigate to the '/tasks' route
  if (!session) {
    await router.navigate(['/tasks']);
    return false; // Prevent navigation to the original route
  }

  // If session is true, allow navigation
  return true;
};
