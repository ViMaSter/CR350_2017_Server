import { SessionServer } from "sessionserver"
import { ISessionData } from "sessionserver"

class GameData implements ISessionData
{
	playerPositionX : number = -1;
	playerPositionY : number = -1;
	health : number = -1;
	constructor(parameters : any)
	{
		if (typeof parameters.playerPositionX == "number")
		{
			this.playerPositionX = parameters.playerPositionX;
		}
		if (typeof parameters.playerPositionY == "number")
		{
			this.playerPositionY = parameters.playerPositionY;
		}
		if (typeof parameters.health == "number")
		{
			this.health = parameters.health;
		}
	}

	Update(parameters : any) : void
	{
		if (typeof parameters.playerPositionX == "number")
		{
			this.playerPositionX = parameters.playerPositionX;
		}
		if (typeof parameters.playerPositionY == "number")
		{
			this.playerPositionY = parameters.playerPositionY;
		}
		if (typeof parameters.health == "number")
		{
			this.health = parameters.health;
		}
	}
};


let server : Promise<SessionServer> = SessionServer.Create(GameData, 7000);
