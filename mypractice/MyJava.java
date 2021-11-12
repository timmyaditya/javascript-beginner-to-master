import java.util.*;
class MyJava{
    public static void main(String args[]){
        System.out.println("start");
        ArrayList<ArrayList<Integer>> al = new ArrayList<>(10);
        Collections.fill(al, new ArrayList<Integer>(10));
        for(ArrayList<Integer> x: al){
           x.add(10);
        }

        for(ArrayList<Integer> a: al){
            for(int x: a){
                System.out.println(x);
            }
        }

        al.stream().forEach((ele)->{
            System.out.println(ele);
        });
    }
}