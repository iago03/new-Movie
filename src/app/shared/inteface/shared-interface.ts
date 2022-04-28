export interface MoviListInfo{
    id:number;
    backdrop_path:string;
    poster_path:string;
    original_title:string;
    overview:string;
    release_date:string;
    original_language:string;
    vote_average:number;
}

export interface MoviItemInfo extends MoviListInfo{
    budget:number;
    genres:any[];
    production_companies:any[];
    runtime:number;
    status:string;
}