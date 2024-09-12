export interface ITranslate {
    /**
     *
     */
    t: (word: string) => string;
    defaultNs: (namespace: string) => void;
}
export interface IDataProvider<T> {
    /**
     *
     */
    getData: (params: any) => Promise<Array<T>> | Promise<T>;
}
export interface MenuItemData {
    img?: string;
    title?: string;
}
export interface BaladoCardDTO {
    title: string;
    imgSrc: string;
    date: Date;
    category: string;
    description?: string;
}
export interface HistoryDTO {
    title?: string;
    type?: string;
    src?: string;
    date?: Date;
    description?: string;
    balado?: BaladoCardDTO;
}
export interface TeamMemberDto {
    name: string;
    lastname: string;
    description: string;
    title?: string;
    occupation?: string;
    picture?: string;
    category: string;
}
export interface BaseHeroDto {
    description?: string;
    button_text?: string;
}
export interface HeroDto extends BaseHeroDto {
    title?: string;
    media?: string;
}
export interface CardHeroDto extends HeroDto {
    category: string;
    tag: string;
}
export interface ExplorerHeroDto extends BaseHeroDto {
    title?: string;
    total_obs?: number;
    observed_species?: number;
    survey_sites?: number;
}
export interface SectioItemDto {
    title?: string;
    media?: any;
    description?: string;
}
export interface PartnerSectionDto {
    title?: string;
    description?: string;
    priority?: number;
    section_items?: Array<SectioItemDto>;
}
export interface ContactusDto {
    title?: string;
    telephone?: string;
    email?: string;
    postalcode?: string;
    nameplaceholder?: string;
    emailplaceholder?: string;
    messageplaceholder?: string;
    messageformplaceholder?: string;
}
