import { heroes } from '../data/heroes';

export const getHeroByPublisher = ( publisher ) => {

    const validpublishers = [ 'DC Comics', 'Marvel Comics'];

    if ( !validpublishers.includes( publisher ) ) {
        throw new Error ( `Publisher "${ publisher }" no es correcto `);
    }
    return heroes.filter(hero => hero.publisher === publisher );

}