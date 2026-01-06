export class LinkMapper {

    private static readonly LINKS: Record<string, string> = {
        "GITHUB": "https://github.com/JulianTs0",
        "LINKEDIN": "https://www.linkedin.com/in/julian-torres-sorcini-aa4a67238/",
        "MAIN_FORTUNE": "https://fortune-utn.vercel.app",
        "GIT_FORTUNE": "",
        "GIT_CONTAINER": "https://github.com/JulianTs0/contenedores-api",
        "DEFAULT": ""
    }

    public static getLink(type?: string): string {
        if (!type) return this.LINKS["DEFAULT"];
        const key = type.toUpperCase().trim();
        return this.LINKS[key] || this.LINKS["DEFAULT"];
    }

}
