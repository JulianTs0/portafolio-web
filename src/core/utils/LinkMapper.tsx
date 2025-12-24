export class LinkMapper {

    private static readonly LINKS: Record<string, string> = {
        "GITHUB": "",
        "LINKEDIN": "",
        "DEFAULT": ""
    }

    public static getLink(type?: string): string {
        if (!type) return this.LINKS["DEFAULT"];
        const key = type.toUpperCase().trim();
        return this.LINKS[key] || this.LINKS["DEFAULT"];
    }

}
