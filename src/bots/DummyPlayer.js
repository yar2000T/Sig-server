const Bot = require("./Bot");
const Misc = require("../primitives/Misc");

class DummyPlayer extends Bot {
    /**
     * @param {World} world
     * @param {number} x
     * @param {number} y
     * @param {number} size
     * @param {string=} name
     * @param {string=} skin
     * @param {number=} color
     */
    constructor(world, x, y, size, name = "Training Dummy", skin = "", color = null) {
        super(world);

        this.mouseX = x;
        this.mouseY = y;

        const player = this.player;
        player.cellName = player.leaderboardName = player.chatName = name;
        player.cellSkin = skin;
        player.cellColor = color === null ? Misc.randomColor() : color;
        player.chatColor = player.cellColor;
        player.clan = "";
        player.sub = false;

        world.spawnPlayer(player, { x, y }, size);
    }

    static get type() { return "dummyplayer"; }
    static get isExternal() { return false; }
    static get separateInTeams() { return true; }

    get shouldClose() {
        return this.disconnected;
    }

    update() {
        if (!this.player.exists || !this.player.hasWorld) return;
        const cell = this.player.ownedCells[0];
        if (!cell) return;
        this.mouseX = cell.x;
        this.mouseY = cell.y;
        this.splitAttempts = 0;
        this.ejectAttempts = 0;
        this.isPressingQ = false;
        this.hasProcessedQ = false;
        this.spawningAttributes = null;
    }

    onSpawnRequest() { }
}

module.exports = DummyPlayer;
