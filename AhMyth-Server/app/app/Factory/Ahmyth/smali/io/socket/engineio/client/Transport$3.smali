.class Lio/socket/engineio/client/Transport$3;
.super Ljava/lang/Object;
.source "Transport.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lio/socket/engineio/client/Transport;->send([Lio/socket/engineio/parser/Packet;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lio/socket/engineio/client/Transport;

.field final synthetic val$packets:[Lio/socket/engineio/parser/Packet;


# direct methods
.method constructor <init>(Lio/socket/engineio/client/Transport;[Lio/socket/engineio/parser/Packet;)V
    .locals 0
    .param p1, "this$0"    # Lio/socket/engineio/client/Transport;

    .line 97
    iput-object p1, p0, Lio/socket/engineio/client/Transport$3;->this$0:Lio/socket/engineio/client/Transport;

    iput-object p2, p0, Lio/socket/engineio/client/Transport$3;->val$packets:[Lio/socket/engineio/parser/Packet;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 100
    iget-object v0, p0, Lio/socket/engineio/client/Transport$3;->this$0:Lio/socket/engineio/client/Transport;

    iget-object v0, v0, Lio/socket/engineio/client/Transport;->readyState:Lio/socket/engineio/client/Transport$ReadyState;

    sget-object v1, Lio/socket/engineio/client/Transport$ReadyState;->OPEN:Lio/socket/engineio/client/Transport$ReadyState;

    if-ne v0, v1, :cond_0

    .line 101
    iget-object v0, p0, Lio/socket/engineio/client/Transport$3;->this$0:Lio/socket/engineio/client/Transport;

    iget-object v1, p0, Lio/socket/engineio/client/Transport$3;->val$packets:[Lio/socket/engineio/parser/Packet;

    invoke-virtual {v0, v1}, Lio/socket/engineio/client/Transport;->write([Lio/socket/engineio/parser/Packet;)V

    .line 105
    return-void

    .line 103
    :cond_0
    new-instance v0, Ljava/lang/RuntimeException;

    const-string v1, "Transport not open"

    invoke-direct {v0, v1}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/String;)V

    throw v0
.end method
