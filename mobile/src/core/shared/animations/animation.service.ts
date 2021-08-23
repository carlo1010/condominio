import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const fadeIn =
    trigger('fadeIn', [
        state('in', style({
            opacity: 1
        })),
        transition('void => *', [
            style({opacity: 0}),
            animate('1100ms 200ms ease-in')
        ])
    ]);

export const loginState = trigger('loginState', [
    state('active', style({
        opacity: 1
    })),
    transition('void => *', animate('600ms  ease-out',
        keyframes([
            style({transform: 'translate3d(0,1000px,0)', offset: 0}),
            style({transform: 'translate3d(0,250px,0)', offset: 0.5}),
            style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
            style({transform: 'translate3d(0,0,0)', offset: 1})
        ])
    )),
]);

export const registerState =
    trigger('registerState', [
        state('active', style({
            opacity: 1
        })),
        transition('void => *', animate('1000ms  ease-out',
            keyframes([
                style({transform: 'translate3d(0,1000px,0)', offset: 0}),
                style({transform: 'translate3d(0,250px,0)', offset: 0.5}),
                style({transform: 'translate3d(0,-20px,0)', offset: 0.9}),
                style({transform: 'translate3d(0,0,0)', offset: 1})
            ])
        )),
    ]);
