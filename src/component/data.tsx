

export interface FileNode {
    id: string
    children?: FileNode[]
  }
  

export const root:FileNode = {
    id: 'Root',
    children: [
        {
            id: 'Adobe',
            children: [
                {
                    id: "Adobe Lightroom"
                },
                {
                    id: "Adobe Photoshop",
                    children: [
                        {
                            id: 'premium-version'
                        }
                    ]
                }
            ]
        },
        {
            id: 'Microsof',
            children: [
                {
                    id: 'Word MS',
                    children: [
                        {
                            id: 'Word Online'
                        },
                        {
                            id: 'Word Offline'
                        }
                    ]
                },
                {
                    id: 'PowerPoint',
                    children: [
                        {
                            id: 'Online Powerpoint'
                        },
                        {
                            id: 'Offline PowerPoint'
                        }
                    ]
                }
            ]
        }
        
    ]
}