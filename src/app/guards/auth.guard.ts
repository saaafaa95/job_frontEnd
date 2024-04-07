import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const service = inject(AuthService)
  const LogginIn = service.isLogginIn();
  
  //ken enti deja d5alt login 
        if( LogginIn ){
          //rahou bech yhezin lel route hedha ali houwa slach home
          router.navigate(['/']);
          return false ;
        }else{
          //makench nod5el 3adi login 
          return true ;
        }
};
