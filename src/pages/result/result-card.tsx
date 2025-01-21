import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


type ResultCardProps = {
    title:string;
    children: React.ReactNode;
}

export function ResultCard({children,title}:ResultCardProps){
    return(
        <Card className="flex flex-col items-center rounded-sm">
        <CardHeader className="bg-secondary-foreground w-full p-4">
          <CardTitle className="text-white text-lg font-normal flex items-center justify-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="w-full p-4 text-secondary-foreground text-sm">
          {children}
        </CardContent>
      </Card>
    )
}