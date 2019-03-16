* [overview](#overview)
* [json-utility](#json-utility)
    * [ex #1](#example-1)
    * [ex #2](#example-2)

## Overview <a name="overview"></a>

---

* [serialization @ unity blog](https://blogs.unity3d.com/2014/06/24/serialization-in-unity/)

## JSON Utility <a name="json-utility"></a>

---

* `example #1` <a name="example-1"></a>

    1. `data.json`:

        ```json
        {
            "Phrases":
            [
                {
                    "Title": "electricity",
                    "CategoryIndex": 0
                },
                {
                    "Title": "rocketship",
                    "CategoryIndex": 2
                },
                {
                    "Title": "funkytown",
                    "CategoryIndex": 1
                },
                {
                    "Title": "sailboat",
                    "CategoryIndex": 2
                },		
                {
                    "Title": "treehouse",
                    "CategoryIndex": 3
                }
            ]
        }
        ```

        ![JSON Utility](_asset/img/01.png)

    2. `Phrase.cs`

        ```c#
        namespace Codebycandle.ClientGameX
        {
            [System.Serializable]
            public class Phrase
            {
                public string Title;
                public int CategoryIndex;
            }
        }
        ```

    3. `PhraseList.cs`

        ```c#
        using System.Collections.Generic;

        namespace Codebycandle.ClientGameX
        {
            [System.Serializable]
            public class PhraseList
            {
                public List<Phrase> Phrases = new List<Phrase>();
            }
        }
        ```

    4.  `DataManager.cs`

        ```c#
        using System.Collections;
        using System.Collections.Generic;
        using UnityEngine;

        namespace Codebycandle.ClientGameX
        {
            public class DataManager:MonoBehaviour
            {
                private PhraseList phraseList = new PhraseList();

                public PhraseList ParseData(bool isLocal, string fileName = "data")
                {
                    // get text-asset
                    TextAsset asset = Resources.Load(fileName) as TextAsset;
                    if(!asset)
                    {
                        Debug.Log("Error - FAILED TO GET TEXT ASSET");

                        return null;
                    }

                    phraseList = JsonUtility.FromJson<PhraseList>(asset.text);

                    List<string> titles = new List<string>();
                    foreach(Phrase w in phraseList.Phrases)
                    {
                        titles.Add(w.Title);
                    }

                    return JsonUtility.FromJson<PhraseList>(asset.text);
                }
            }
        }
        ```

* `example #2` <a name="example-2"></a>

    * ![JSON Utility](_asset/img/02.png)

    * ![JSON Utility](_asset/img/03.png)