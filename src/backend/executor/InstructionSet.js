define([
    "./ResolveInstr",
    "./FetchInstr",
    "./ReturnInstr",
    "./AddInstr",
    "./AssignInstr",
    "./CallInstr",
    "./BranchInstr",
    "./EqInstr",
    "./LeqInstr",
    "./LessInstr",
    "./NotInstr",
    "./RefInstr",
    "./DerefInstr",
    "./PaddInstr",
    "./VaEndInstr"
    ], function(ResolveInstr, FetchInstr, ReturnInstr, AddInstr, AssignInstr,
                CallInstr, BranchInstr, EqInstr, LeqInstr, LessInstr, NotInstr,
                RefInstr, DerefInstr, createPointerOp, VaEndInstr) {

        return {
            "RESOLVE": ResolveInstr,
            "FETCH": FetchInstr,
            "RETURN": ReturnInstr,
            "ADD": AddInstr,
            "ASSIGN": AssignInstr,
            "CALL": CallInstr,
            "BRANCH": BranchInstr,
            "EQ": EqInstr,
            "LEQ": LeqInstr,
            "LESS": LessInstr,
            "NOT": NotInstr,
            "REF": RefInstr,
            "DEREF": DerefInstr,
            "PADD": createPointerOp("PADD"),
            "PSUB": createPointerOp("PSUB"),
            "VAEND": VaEndInstr
        };
        
});