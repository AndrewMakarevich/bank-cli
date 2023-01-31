export interface ICommandOption {
  availableNames: string[];
  mainName: string;
  description?: string;

  parseOptionPattern: (optionPattern: string) => {
    availableNames: string[];
    mainName: string;
  };
}
