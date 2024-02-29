export function domInjector(seletor: string){
    return function (target: any, propertyKey: string){

        let element: HTMLElement | null = null
        const getter = function(){
            if (!element){
                element = <HTMLElement>document.querySelector(seletor)
            }
            return element
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        )

    }
}