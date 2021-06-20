const MESSAGES = {
  COMMANDS: {
    ADMIN: {
      EVAL: {
        name: "eval",
        description: "Renvoie un code js testé.",
        aliases: [""],
        category: "admin",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<code_test_js>",
        args: true
      },
      CONFIG: {
        name: "config",
        description: "Modifier la db.",
        aliases: [""],
        category: "admin",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<key> <value>",
        args: true
      }
    },
    COLLECTORS: {
      MSGCOLLECTOR: {
        name: "msgcollector",
        description: "Collecte les messages.",
        aliases: ["mcol"],
        category: "collectors",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<terme_collect>",
        args: true
      }
    },
    EXPERIENCE: {
      REMOVEEXPERIENCE: {
        name: "removeexperience",
        description: "Enlève de l'xp à l'utilisateur.",
        aliases: ["rmxp", "removeexperience"],
        category: "experience",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<@user> <xp>",
        args: true
      },
      ADDEXPERIENCE: {
        name: "addexperience",
        description: "Ajout xp à l'utilisateur.",
        aliases: ["addxp", "addexperience"],
        category: "experience",
        isAdmin: false,
        permissions: true,
        cooldown: 3,
        usage: "<@user> <xp>",
        args: true
      },
      USEREXPERIENCE: {
        name: "userexperience",
        description: "Exp de l'utilisateur.",
        aliases: ["usrxp", "userexperience"],
        category: "experience",
        isAdmin: false,
        permissions: false,
        cooldown: 10,
        usage: "",
        args: false
      }
    },
    MISC: {
      ARENA: {
        name: "arena",
        aliases: ["arena", "arene"],
        category: "misc",
        description: "Scores Arene IG",
        isAdmin: false,
        permissions: false,
        args: false
      },
      GUILDE: {
        name: "guilde",
        aliases: ["guilde", "gld", "g"],
        category: "misc",
        description: "Membres de la guilde (ig).",
        isAdmin: false,
        permissions: false,
        args: false
      },
      SLIP: {
        name: "slip",
        description: "ça dérape !",
        aliases: "slip",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      PING: {
        name: "ping",
        description: "Temps de réponse serveur / client.",
        aliases: "pg",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      INFOBOT: {
        name: "infobot",
        description: "Info sur le bot.",
        aliases: ["infobot", "infosbots", "ibot", "stbot"],
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      USERINFO: {
        name: "userinfo",
        description: "Info sur toi même ou un membre de la guilde.",
        aliases: "user",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        usage: "<command_name> <member>",
        args: false
      },
      SONDAGE: {
        name: "sondage",
        description: "Crée un sondage",
        aliases: ["sdg", "poll", "sond"],
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 1,
        usage: "<sondage>",
        args: true
      },
      SERVERINFO: {
        name: "serverinfo",
        description: "Info sur le discord.",
        aliases: "server",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      DICE: {
        name: "dice",
        description: "Lancé de dés !",
        aliases: "d",
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      KESKIDI: {
        name: "keskidi",
        description: "",
        aliases: ["k", "mekeskidi"],
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        args: false
      },
      HELP: {
        name: "help",
        description: "Liste des commandes disponibles.",
        aliases: ["h", "?"],
        category: "misc",
        isAdmin: false,
        permissions: false,
        cooldown: 3,
        usage: "<command_name>",
        args: false
      },
      MEMBERS: {
        name: "members",
        aliases: ["members", "mbr", "mbrs"],
        category: "misc",
        description: "Affiche la liste des membres de la guilde",
        permissions: false,
        isAdmin: false,
        cooldown: 5,
        args: false,
        usage: ""
      }
    },
    MODERATION: {
      ANNONCES: {
        name: "annonces",
        aliases: ["annonces", "ann", "an", "anc", "announces"],
        category: "moderation",
        description:
          "Annonce automatique des défenses gvg (grosses defs / trolls defs)",
        isAdmin: false,
        permissions: true,
        args: false
      },
      CLEAR: {
        name: "clear",
        aliases: ["clear", "cls", "del"],
        category: "moderation",
        description: "Suppression des messages",
        permissions: true,
        isAdmin: false,
        cooldown: 3,
        args: true,
        usage: "<nbr (1-100)>"
      },
      EMBED: {
        name: "embed",
        aliases: ["an", "ann"],
        category: "moderation",
        description: "Envoie un embed !",
        isAdmin: false,
        permissions: true,
        args: false,
        usage: "test"
      },
      MUTE: {
        name: "mute",
        aliases: ["mute", "mu", "m"],
        category: "moderation",
        description: "Mute l'utilisateur mentionné.",
        permissions: true,
        isAdmin: true,
        cooldown: 3,
        args: true,
        usage: "<@user> <time>"
      },
      RELOAD: {
        name: "reload",
        description: "Reboot le bot.",
        aliases: ["reboot", "restart"],
        category: "moderation",
        permissions: true,
        isAdmin: false,
        args: false,
        usage: ""
      },
      TG: {
        name: "tg",
        aliases: ["tg"],
        category: "moderation",
        description: "Suppression des x derniers messages du membre.",
        permissions: true,
        isAdmin: true,
        cooldown: 3,
        args: true,
        usage: "<user> <nbr (1-100)>"
      },
      UNMUTE: {
        name: "unmute",
        aliases: ["unmute", "nomute", "stopmute", "um"],
        category: "moderation",
        description: "Unmute l'utilisateur mentionné.",
        permissions: true,
        isAdmin: true,
        cooldown: 3,
        args: true,
        usage: "<@user>"
      }
    },
    TARTA: {
      ADDLANTERN: {
        name: "addlantern",
        aliases: ["addlant", "addl"],
        category: "tarta",
        description: "Ajoute une lanterne à l'utilisateur",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: false,
        usage: "<membre>"
      },
      LANTERNS: {
        name: "lanterns",
        aliases: ["lant", "lanternes"],
        category: "tarta",
        description: "Lanternes en cours des membres.",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: false,
        usage: ""
      },
      REMOVELANTERN: {
        name: "removelantern",
        aliases: ["rmlant", "rl"],
        category: "tarta",
        description: "Retire une lanterne à l'utilisateur",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: false,
        usage: "<membre>"
      },
      TARTA: {
        name: "tarta",
        aliases: ["t"],
        category: "tarta",
        description: "user et lvl Tarta",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: true,
        usage: "<tonMsg>"
      },
      TARTA1: {
        name: "tarta1",
        aliases: ["t1"],
        category: "tarta",
        description: "Désigne la cible 1 dans Tarta",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: true,
        usage: "<tonMsg>"
      },
      TARTA2: {
        name: "tarta2",
        aliases: ["t2"],
        category: "tarta",
        description: "Désigne la cible 2 dans Tarta",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: true,
        usage: "<tonMsg>"
      },
      TARTA3: {
        name: "tarta3",
        aliases: ["t3"],
        category: "tarta",
        description: "Désigne la cible 3 dans Tarta",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: true,
        usage: "<tonMsg>"
      },
      TARTA_CLEAN: {
        name: "tarta_clean",
        aliases: ["tc", "tclean"],
        category: "tarta",
        description: "Rush minuit Tarta",
        isAdmin: false,
        permissions: true,
        cooldown: 0,
        args: false,
        usage: ""
      }
    }
  }
};

const CHANNELS = {
  TARTA: {
    id: "703645975721410660"
  },
  GVG: {
    id: "703645929483272283"
  },
  LOG: {
    id: "733684325870207126"
  },
  ANNC: {
    id: "678241770278223883"
  },
  DESK: {
    id: "697612522907369533"
  },
  ABS: {
    id: "675872225970356256"
  }
};

const USERID = {
  AUTHOR: {
    id: "687034327841898526"
  }
};

exports.MESSAGES = MESSAGES;
exports.CHANNELS = CHANNELS;
exports.USERID = USERID;
