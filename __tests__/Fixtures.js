export const mockSecrets = {
    hsl: {
        username: 'palveluvayla_hsl_mydata',
        password: 'mock',
    },
    frank: {
        username: 'palveluvayla_frank_mydata',
        password: 'mock',
    },
};

export const oppija = {
    henkilö: {
        oid: '1.2.246.562.24.92333381381',
        hetu: '120496-ABC1',
        syntymäaika: '1996-04-12',
        etunimet: 'Aarne',
        kutsumanimi: 'Aarne',
        sukunimi: 'Ammattilainen1',
        äidinkieli: {
            koodiarvo: 'FI',
            nimi: { fi: 'suomi', sv: 'finska', en: 'Finnish' },
            lyhytNimi: { fi: 'suomi', sv: 'finska', en: 'Finnish' },
            koodistoUri: 'kieli',
            koodistoVersio: 1,
        },
        kansalaisuus: [
            {
                koodiarvo: '246',
                koodistoUri: 'maatjavaltiot2',
                koodistoVersio: 1,
            },
        ],
        turvakielto: false,
    },
    opiskeluoikeudet: [{
        arvioituPäättymispäivä: '2020-05-01',
        lisätiedot: {
            osaAikaisuusjaksot: [
                {
                    alku: '2018-05-08',
                    osaAikaisuus: 50,
                },
                {
                    alku: '2019-05-08',
                    osaAikaisuus: 80,
                },
            ],
        },
        oppilaitos: {
            nimi: {
                fi: 'Lappeen koulu',
            },
            oppilaitosnumero: {
                koodiarvo: '03829',
            },
        },
        sisältyyOpiskeluoikeuteen: {
            oppilaitos: {
                oid: '1.2.246.562.10.52251087186',
            },
        },
        suoritukset: [
            {
                järjestämismuodot: [
                    {
                        järjestämismuoto: {
                            tunniste: {
                                koodiarvo: '20',
                            },
                        },
                    },
                ],
                koulutussopimukset: [
                    {
                        työssäoppimispaikka: {
                            fi: 'McDonalds',
                        },
                    },
                ],
                osaamisenHankkimistavat: [
                    {
                        osaamisenHankkimistapa: {
                            tunniste: {
                                koodiarvo: 'oppisopimus',
                            },
                        },
                    },
                ],
            },
        ],
        tila: {
            opiskeluoikeusjaksot: [
                {
                    alku: '2008-08-15',
                    tila: {
                        koodiarvo: 'lasna',
                        koodistoUri: 'koskiopiskeluoikeudentila',
                        koodistoVersio: 1,
                        nimi: {
                            fi: 'Läsnä',
                            sv: 'Närvarande',
                        },
                    },
                },
                {
                    alku: '2016-06-04',
                    tila: {
                        koodiarvo: 'valmistunut',
                        koodistoUri: 'koskiopiskeluoikeudentila',
                        koodistoVersio: 1,
                        nimi: {
                            fi: 'Valmistunut',
                            sv: 'Utexaminerad',
                        },
                    },
                },
            ],
        },
    }],
};
