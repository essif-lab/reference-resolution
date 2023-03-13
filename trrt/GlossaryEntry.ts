export class GlossaryEntry{
      private _term: string;
      private _scopetag!: string;
      private _locator!: string;
      private _isa: any;
      private _termType!: string;
      private _status!: string;
      private _synonyms!: string[];
      private _groupTags!: string[];
      private _glossaryText!: string;
      private _hoverText!: string;
      private _created!: Date;
      private _updated!: Date;
      private _vsntag!: string;
      private _commit: any;
      private _contributors!: string;
      private _attribution: any;
      private _originalLicense: any;
      private _navurl!: string;
      private _headingids!: string[];


      public constructor (term: string, navurl: string){
            this._term = term;
            this.navurl = navurl;
      } 

      public get term(): string {
            return this._term;
      }
      public set term(value: string) {
            this._term = value;
      }

      public get scopetag(): string {
            return this._scopetag;
      }
      public set scopetag(value: string) {
            this._scopetag = value;
      }      
      
      public get locator(): string {
            return this._locator;
      }
      public set locator(value: string) {
            this._locator = value;
      }
      
      public get isa(): any {
            return this._isa;
      }
      public set isa(value: any) {
            this._isa = value;
      }

      public get termType(): string {
            return this._termType;
      }
      public set termType(value: string) {
            this._termType = value;
      }      
      
      public get status(): string {
            return this._status;
      }
      public set status(value: string) {
            this._status = value;
      }      
      
      public get synonyms(): string[] {
            return this._synonyms;
      }
      public set synonyms(value: string[]) {
            this._synonyms = value;
      }

      public get groupTags(): string[] {
            return this._groupTags;
      }
      public set groupTags(value: string[]) {
            this._groupTags = value;
      }

      public get glossaryText(): string {
            return this._glossaryText;
      }
      public set glossaryText(value: string) {
            this._glossaryText = value;
      }

      public get hoverText(): string {
            return this._hoverText;
      }
      public set hoverText(value: string) {
            this._hoverText = value;
      }

      public get created(): Date {
            return this._created;
      }
      public set created(value: Date) {
            this._created = value;
      }      
      
      public get updated(): Date {
            return this._updated;
      }
      public set updated(value: Date) {
            this._updated = value;
      }

      public get vsntag(): string {
            return this._vsntag;
      }
      public set vsntag(value: string) {
            this._vsntag = value;
      }      
      
      public get commit(): any {
            return this._commit;
      }
      public set commit(value: any) {
            this._commit = value;
      }

      public get contributors(): string {
            return this._contributors;
      }
      public set contributors(value: string) {
            this._contributors = value;
      }      
      
      public get attribution(): any {
            return this._attribution;
      }
      public set attribution(value: any) {
            this._attribution = value;
      }

      public get originalLicense(): any {
            return this._originalLicense;
      }
      public set originalLicense(value: any) {
            this._originalLicense = value;
      }

      public get navurl(): string {
            return this._navurl;
      }
      public set navurl(value: string) {
            this._navurl = value;
      }

      public get headingids(): string[] {
            return this._headingids;
      }
      public set headingids(value: string[]) {
            this._headingids = value;
      }
}