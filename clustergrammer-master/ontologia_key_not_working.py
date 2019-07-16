############################## Ontology nodes
mycursor.execute('SELECT cond_property_id, condition_node_name, parent_node_id, is_leaf, condition_vector_bit, condition_node_description from condition_definition')
cond_ont = pd.DataFrame(mycursor.fetchall())
cond_ont.columns = ['cond_property_id','condition_node_name','parent_node_id','is_leaf','condition_vector_bit','condition_node_description']
cond_ont.index = cond_ont['cond_property_id']
# print(cond_ont.to_string())

cond_ont.loc[cond_ont['parent_node_id'] == 0]
level0 = cond_ont.loc[cond_ont['parent_node_id'] == 0,'cond_property_id']



def cond_boolean(x,y):
    condition = (cond_ont['parent_node_id'] == x) & (cond_ont['is_leaf'] == y)
    return condition

def cond_fun(x,y):
    condition = cond_ont.loc[cond_boolean(x,y)]
    return condition['cond_property_id']


level1 = level0.apply(lambda x: cond_fun(x,0)).values.flatten()
level1 = np.array(level1[~np.isnan(level1)],dtype = int)







level2 ={}
level ={}
# 1. Identificar el parent_node_id
# 2. Si es el que busco
# 3. anotar cond_property_id
# 4. Si leaf es 1 DONE
# 5. Si leaf es 0
# 6. Usar cond_property_id as parent_node_id
# 7. Si es 1 DONE
# 9. Si es 0 REPETIR

x = 114
leaf0 = cond_fun(x,0)

level ={}
node = {}

for i in leaf0:
    level[i]= cond_fun(i,1)
    node = cond_fun(i,0)
    for n in node:
        level[i]= pd.concat([level[i],cond_fun(n,1)])
        while len(node) != 0:
            for n in node:
                level[i]= pd.concat([level[i],cond_fun(n,1)])
                node = cond_fun(n,0)
                print node
                print len(node)
